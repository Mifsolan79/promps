function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>'"]/g, function(tag) {
        const chars = {'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'};
        return chars[tag] || tag;
    });
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

        const container = document.getElementById('prompts-container');
        const nav = document.getElementById('categories-nav');
        const title = document.getElementById('current-category');
        const count = document.getElementById('prompt-count');
        const toast = document.getElementById('toast');

        let currentCat = '';

        function handleSearch(query) {
            const clearBtn = document.getElementById('clear-search');
            const searchIcon = document.getElementById('search-icon');
            
            if (query.trim().length > 0) {
                clearBtn.style.display = 'block';
                searchIcon.style.display = 'none';
                
                // Realizar búsqueda global
                let results = [];
                Object.keys(PROMPT_DATABASE).forEach(cat => {
                    const filtered = PROMPT_DATABASE[cat].filter(p => 
                        p.title.toLowerCase().includes(query.toLowerCase()) || 
                        p.content.toLowerCase().includes(query.toLowerCase())
                    );
                    results = results.concat(filtered);
                });
                
                renderSearchResults(results, query);
            } else {
                clearBtn.style.display = 'none';
                searchIcon.style.display = 'block';
                // Volver a la categoría actual o la primera por defecto
                if (currentCat) {
                    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.textContent === currentCat);
                    if (activeBtn) {
                        selectCategory(currentCat, activeBtn);
                    } else {
                        // Si no hay botón activo (ej: tras búsqueda), re-inicializar
                        const firstBtn = document.querySelector('.nav-btn');
                        if (firstBtn) selectCategory(firstBtn.textContent, firstBtn);
                    }
                }
            }
        }

        function clearSearch() {
            const searchInput = document.getElementById('prompt-search');
            searchInput.value = '';
            handleSearch('');
        }

        function renderSearchResults(results, query) {
            // Deseleccionar botones de categoría
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            
            title.innerHTML = `Resultados: <span style="color:var(--neon-blue)">${escapeHTML(query)}</span> <span id="prompt-count">${results.length}</span>`;
            
            container.innerHTML = '';
            if (results.length === 0) {
                container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 100px; color: var(--neon-pink); font-size: 1.5rem; opacity: 0.7; font-family: 'Orbitron', sans-serif;">NO SE ENCONTRARON RESULTADOS</div>`;
                return;
            }
            
            // Reutilizamos la lógica de renderPrompts pero directamente aquí para el set filtrado
            results.forEach(p => appendPromptCard(p));
        }

        function init() {
            const categories = Object.keys(PROMPT_DATABASE);
            const specialPriority = ["PROFESIONES", "CV"];
            specialPriority.slice().reverse().forEach(cat => {
                const idx = categories.indexOf(cat);
                if (idx > -1) {
                    categories.splice(idx, 1);
                    categories.unshift(cat);
                }
            });
            categories.forEach(cat => {
                const btn = document.createElement('button');
                btn.className = 'nav-btn';
                btn.textContent = cat;
                btn.addEventListener('click', () => selectCategory(cat, btn));
                nav.appendChild(btn);
            });
            if (categories[0]) selectCategory(categories[0], nav.querySelector('.nav-btn'));
        }

        function selectCategory(catName, btn) {
            currentCat = catName;
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            title.innerHTML = `${catName} <span id="prompt-count">${PROMPT_DATABASE[catName].length}</span>`;
            renderPrompts(PROMPT_DATABASE[catName]);
        }

        function renderPrompts(prompts) {
            container.innerHTML = '';
            prompts.forEach(p => appendPromptCard(p));
        }

        function appendPromptCard(p) {
            const cleanTitle = p.title.includes('/') ? p.title.split('/').pop().trim().toUpperCase() : p.title.toUpperCase();
            const card = document.createElement('div');
            card.className = 'prompt-card';
            card.id = `card-${p.id}`;
            card.innerHTML = `
                <div class="prompt-header">
                    <span class="prompt-id">#${p.number}</span>
                    <span class="prompt-style">${p.style}</span>
                </div>
                <div class="prompt-title">${cleanTitle}</div>
                <div class="prompt-text" data-base="${p.content.replace(/"/g, '&quot;')}" id="text-${p.id}">${getProcessedText(p.content)}</div>
                <div class="prompt-actions">
                    <button class="btn-copy">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                        COPIAR
                    </button>
                    <button class="btn-export" title="Exportar como Imagen">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </button>
                </div>
            `;
            
            card.querySelector('.btn-copy').addEventListener('click', () => copyPrompt(p.id));
            card.querySelector('.btn-export').addEventListener('click', () => exportPromptAsImage(p.id, p.number, p.style, cleanTitle));
            
            container.appendChild(card);
        }

        async function exportPromptAsImage(id, number, style, titleText) {
            const expContainer = document.getElementById('export-temp-container');
            const processedText = document.getElementById(`text-${id}`).innerText;
            const specs = [];
            const vars = ['technique', 'light', 'lens', 'dof', 'shot', 'effect', 'atmosphere', 'clothing'];
            
            vars.forEach(v => {
                const el = document.getElementById(`var-${v}`);
                if (el && el.value && el.value !== 'MANUAL') {
                    const txt = el.options[el.selectedIndex].text;
                    if (txt && !/Por defecto|Ninguno|Original/i.test(txt)) specs.push(txt);
                }
            });

            const sigText = document.getElementById('var-signature').value;
            if (sigText) specs.push(`✍️ Firma: ${sigText}`);

            expContainer.innerHTML = `
                <div class="export-card">
                    <div class="export-header">
                        <div class="export-logo">PORTAL MAESTRO</div>
                        <div class="export-id">#${number}</div>
                    </div>
                    <div class="export-title">${titleText}</div>
                    <div class="export-prompt-text">"${processedText}"</div>
                    <div class="export-footer">
                        <div class="export-specs">
                            ${specs.map(s => `<span class="spec-item">${s}</span>`).join('')}
                            <span class="spec-item" style="border-color:var(--neon-purple); color:var(--neon-purple)">ESTILO: ${style}</span>
                        </div>
                        <div class="export-signature">mifsolan79.github.io/promps - Portal Maestro</div>
                    </div>
                </div>
            `;

            showToast("📸 Generando imagen de alta calidad...");
            
            try {
                await new Promise(r => setTimeout(r, 200));
                const canvas = await html2canvas(expContainer, {
                    backgroundColor: '#050507',
                    scale: 2,
                    logging: false,
                    useCORS: true,
                    allowTaint: true
                });

                const link = document.createElement('a');
                link.download = `PROMPT_${number}_${titleText.replace(/\s+/g, '_')}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                showToast("✅ ¡Imagen descargada con éxito!");
            } catch (err) {
                console.error(err);
                showToast("❌ Error al procesar imagen");
            }
        }

        function toggleManual() {
            const select = document.getElementById('var-face');
            const manual = document.getElementById('var-face-manual');
            manual.style.display = select.value === 'MANUAL' ? 'block' : 'none';
        }

        function toggleManualClothing() {
            const select = document.getElementById('var-clothing');
            const manual = document.getElementById('var-clothing-manual');
            manual.style.display = select.value === 'MANUAL' ? 'block' : 'none';
            if (select.value === 'MANUAL') manual.focus();
        }

        function getProcessedText(baseText) {
            let text = baseText;
            const faceSelect = document.getElementById('var-face');
            const faceManual = document.getElementById('var-face-manual');
            let faceReplacer = faceSelect.value;
            
            if (faceReplacer === 'MANUAL') {
                faceReplacer = faceManual.value || '[INTRODUCIR URL/TEXTO]';
            }

            // Fix for recursive replacement & duplication
            const clothingSelect = document.getElementById('var-clothing');
            const clothingManual = document.getElementById('var-clothing-manual');
            let clothingReplacer = clothingSelect.value;
            if (clothingReplacer === 'MANUAL') {
                clothingReplacer = clothingManual.value ? `vistiendo ${clothingManual.value}` : '[ESCRIBIR VESTIMENTA]';
            }

            const facePatterns = [
                /un hombre con rostro subido como referencia/gi,
                /una mujer con rostro subido como referencia/gi,
                /un anciano con rostro subido como referencia/gi,
                /un niño con rostro subido como referencia/gi,
                /rostro subido como referencia/gi
            ];
            
            for (let pattern of facePatterns) {
                if (pattern.test(text)) {
                    text = text.replace(pattern, faceReplacer);
                    break;
                }
            }

            // Inyectar Estilo, Movimiento, Técnica, Lente, DOF, Plano, Efecto y Atmósfera
            const styleMaster = document.getElementById('var-style-master').value;
            const colorPalette = document.getElementById('var-color').value;
            const technique = document.getElementById('var-technique').value;
            const atmosphere = document.getElementById('var-atmosphere').value;
            const lens = document.getElementById('var-lens').value;
            const dof = document.getElementById('var-dof').value;
            const shot = document.getElementById('var-shot').value;
            const effect = document.getElementById('var-effect').value;
            
            let prefix = "";
            if (technique) prefix += technique + ", ";
            if (atmosphere) prefix += atmosphere + ", ";
            if (styleMaster) prefix += styleMaster + ", ";
            if (colorPalette) prefix += colorPalette + ", ";
            if (clothingReplacer) prefix += clothingReplacer + ", ";
            if (lens) prefix += lens + ", ";
            if (dof) prefix += dof + ", ";
            if (shot) prefix += shot + ", ";
            if (effect) prefix += effect + ", ";
            
            if (prefix) {
                text = prefix + text;
            }

            const light = document.getElementById('var-light').value;
            const quality = document.getElementById('var-quality').value;

            if (light) {
                if (text.toLowerCase().includes('iluminación')) {
                    text = text.replace(/iluminación[^,.]*/gi, light);
                } else if (text.toLowerCase().includes('ilumina')) {
                    text = text.replace(/ilumina[^,.]*/gi, light);
                } else {
                    text += `. Con ${light}`;
                }
            }

            const surface = document.getElementById('var-surface').value;

            if (quality) {
                if (text.includes('8K')) {
                    text = text.replace(/nitidez 8K absoluta[^,.]*/gi, quality);
                    text = text.replace(/realismo[^,.]*8K/gi, quality);
                } else {
                    text += `. Calidad técnica: ${quality}`;
                }
            }

            if (surface) {
                text += `. Representado ${surface}`;
            }

            const cinema = document.getElementById('var-cinema').value;
            const aspect = document.getElementById('var-ar').value;

            if (cinema === 'ON') {
                text += ", cinematic lighting, anamorphic lens, movie scene, shot on 35mm, high contrast";
            }

            if (aspect) {
                text += ` ${aspect}`;
            }

            const signatureText = document.getElementById('var-signature').value.trim();
            if (signatureText) {
                text += `. Included a small, discrete handwritten artist signature in the bottom corner that reads "${signatureText}", elegant script style, cursive ink strokes, authentic feel.`;
            }

            const signatureImg = localStorage.getItem('prompt_almeria_signature');
            if (signatureImg && signatureImg !== 'null') {
                text += ` [Hand-drawn signature enabled: authentic biometric stroke verification]`;
            }

            return text;
        }

        // --- FIRMA A MANO ALZADA ---
        const canvas = document.getElementById('signature-pad');
        const ctx = canvas.getContext('2d');
        let drawing = false;

        function openSignaturePad() {
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.signature-container').classList.add('show');
            resizeCanvas();
            loadSavedSignature();
        }

        function closeSignaturePad() {
            document.querySelector('.overlay').style.display = 'none';
            document.querySelector('.signature-container').classList.remove('show');
        }

        function resizeCanvas() {
            canvas.width = 400;
            canvas.height = 200;
            ctx.strokeStyle = "black";
            ctx.lineWidth = 3;
            ctx.lineCap = "round";
        }

        function startDrawing(e) {
            drawing = true;
            draw(e);
        }

        function stopDrawing() {
            drawing = false;
            ctx.beginPath();
        }

        function draw(e) {
            if (!drawing) return;
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - rect.left;
            const y = (e.clientY || e.touches[0].clientY) - rect.top;

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        window.addEventListener('mouseup', stopDrawing);

        canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDrawing(e); });
        canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); });
        canvas.addEventListener('touchend', stopDrawing);

        function clearSignature() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            localStorage.removeItem('prompt_almeria_signature');
            document.getElementById('sig-preview').style.display = 'none';
            updateView();
        }

        function saveSignature() {
            const dataUrl = canvas.toDataURL();
            localStorage.setItem('prompt_almeria_signature', dataUrl);
            document.getElementById('sig-preview').src = dataUrl;
            document.getElementById('sig-preview').style.display = 'block';
            closeSignaturePad();
            showToast("Firma guardada correctamente");
            updateView();
        }

        function loadSavedSignature() {
            const saved = localStorage.getItem('prompt_almeria_signature');
            if (saved && saved !== 'null') {
                const img = new Image();
                img.onload = () => ctx.drawImage(img, 0, 0);
                img.src = saved;
                document.getElementById('sig-preview').src = saved;
                document.getElementById('sig-preview').style.display = 'block';
            }
        }

        function updateView() {
            const texts = document.querySelectorAll('.prompt-text');
            texts.forEach(el => {
                const baseText = el.getAttribute('data-base').replace(/&quot;/g, '"');
                el.innerText = getProcessedText(baseText);
            });
        }

        function setRandom() {
            const selects = ['var-face', 'var-light', 'var-quality', 'var-cinema', 'var-surface', 'var-ar', 'var-style-master', 'var-color', 'var-technique', 'var-atmosphere', 'var-lens', 'var-dof', 'var-shot', 'var-effect', 'var-clothing'];
            selects.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    const options = Array.from(el.querySelectorAll('option')).filter(o => o.value !== "" && o.value !== "MANUAL");
                    if (options.length > 0) {
                        const randomIndex = Math.floor(Math.random() * options.length);
                        el.value = options[randomIndex].value;
                    }
                }
            });
            updateView();
            
            const btn = document.querySelector('.btn-random');
            if (btn) {
                btn.style.filter = 'hue-rotate(90deg)';
                setTimeout(() => btn.style.filter = '', 300);
            }
        }

        function copyPrompt(id) {
            const el = document.getElementById(`text-${id}`);
            const textToCopy = el.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Prompt #${id.split('_').pop()} Copiado`);
            });
        }

        function showToast(msg) {
            toast.textContent = msg;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }

        // --- GESTIÓN DE PRESETS (localStorage) ---
        const PRESETS_KEY = 'prompt_almeria_presets';

        function saveCurrentAsPreset() {
            const nameInput = document.getElementById('preset-name');
            const name = nameInput.value.trim();
            if (!name) {
                alert("Por favor, introduce un nombre para el preset.");
                return;
            }

            const currentConfig = {
                name: name,
                variables: {
                    'var-face': document.getElementById('var-face').value,
                    'var-light': document.getElementById('var-light').value,
                    'var-quality': document.getElementById('var-quality').value,
                    'var-cinema': document.getElementById('var-cinema').value,
                    'var-ar': document.getElementById('var-ar').value,
                    'var-style-master': document.getElementById('var-style-master').value,
                    'var-technique': document.getElementById('var-technique').value,
                    'var-atmosphere': document.getElementById('var-atmosphere').value,
                    'var-lens': document.getElementById('var-lens').value,
                    'var-dof': document.getElementById('var-dof').value,
                    'var-shot': document.getElementById('var-shot').value,
                    'var-effect': document.getElementById('var-effect').value,
                    'var-clothing': document.getElementById('var-clothing').value,
                    'var-surface': document.getElementById('var-surface').value,
                    'var-color': document.getElementById('var-color').value,
                    'var-signature': document.getElementById('var-signature').value
                }
            };

            let presets = JSON.parse(localStorage.getItem(PRESETS_KEY) || '[]');
            const existingIndex = presets.findIndex(p => p.name === name);
            if (existingIndex !== -1) {
                if (!confirm(`El preset "${name}" ya existe. ¿Deseas sobrescribirlo?`)) return;
                presets[existingIndex] = currentConfig;
            } else {
                presets.push(currentConfig);
            }

            localStorage.setItem(PRESETS_KEY, JSON.stringify(presets));
            nameInput.value = '';
            renderPresetsList();
        }

        function loadPreset(index) {
            const presets = JSON.parse(localStorage.getItem(PRESETS_KEY) || '[]');
            const preset = presets[index];
            if (!preset) return;

            Object.keys(preset.variables).forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.value = preset.variables[id] || "";
                    if (id === 'var-face') {
                        const manual = document.getElementById('var-face-manual');
                        if (manual) manual.style.display = el.value === 'MANUAL' ? 'block' : 'none';
                    }
                }
            });

            updateView();
        }

        function deletePreset(index, event) {
            event.stopPropagation();
            const presets = JSON.parse(localStorage.getItem(PRESETS_KEY) || '[]');
            if (!confirm(`¿Seguro que quieres eliminar el preset "${presets[index].name}"?`)) return;
            
            presets.splice(index, 1);
            localStorage.setItem(PRESETS_KEY, JSON.stringify(presets));
            renderPresetsList();
        }

        function renamePreset(index, event) {
            event.stopPropagation();
            const presets = JSON.parse(localStorage.getItem(PRESETS_KEY) || '[]');
            const oldName = presets[index].name;
            const newName = prompt(`Nuevo nombre para "${oldName}":`, oldName);
            
            if (newName && newName.trim() !== "" && newName !== oldName) {
                presets[index].name = newName.trim();
                localStorage.setItem(PRESETS_KEY, JSON.stringify(presets));
                renderPresetsList();
            }
        }

        function renderPresetsList() {
            const list = document.getElementById('presets-list');
            if (!list) return;
            const presets = JSON.parse(localStorage.getItem(PRESETS_KEY) || '[]');
            
            list.innerHTML = '';
            if (presets.length === 0) {
                list.innerHTML = '<div style="font-size:0.7rem; opacity:0.5; padding:10px;">No hay presets guardados.</div>';
                return;
            }

            presets.forEach((p, i) => {
                const item = document.createElement('div');
                item.className = 'preset-item';
                item.innerHTML = `
                    <span class="preset-name" title="${escapeHTML(p.name)}">${escapeHTML(p.name)}</span>
                    <div class="preset-actions">
                        <button class="preset-action-btn btn-edit" title="Renombrar">✏️</button>
                        <button class="preset-action-btn btn-delete" title="Eliminar">🗑️</button>
                    </div>
                `;
                item.addEventListener('click', () => loadPreset(i));
                item.querySelector('.btn-edit').addEventListener('click', (e) => renamePreset(i, e));
                item.querySelector('.btn-delete').addEventListener('click', (e) => deletePreset(i, e));
                list.appendChild(item);
            });
        }

        async function exportPresets() {
            const presets = localStorage.getItem(PRESETS_KEY);
            if (!presets || presets === '[]') {
                alert("No hay presets para exportar.");
                return;
            }

            // Intentar usar la File System Access API (Chrome/Edge) para elegir destino exacto
            if ('showSaveFilePicker' in window) {
                try {
                    const handle = await window.showSaveFilePicker({
                        suggestedName: 'presets_almeria.json',
                        types: [{
                            description: 'JSON Presets',
                            accept: { 'application/json': ['.json'] },
                        }],
                    });
                    const writable = await handle.createWritable();
                    await writable.write(presets);
                    await writable.close();
                    showToast("Guardado con éxito en la carpeta");
                    return;
                } catch (err) {
                    console.log("Cancelado o no soportado, usando descarga estándar.");
                }
            }

            // Fallback: descarga estándar
            const blob = new Blob([presets], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'presets_almeria.json';
            a.click();
            URL.revokeObjectURL(url);
            showToast("Descargado (muévelo a la carpeta del HTML)");
        }

        function importPresets() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'application/json';
            
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const imported = JSON.parse(e.target.result);
                        if (!Array.isArray(imported)) throw new Error("Formato inválido");

                        const current = JSON.parse(localStorage.getItem(PRESETS_KEY) || '[]');
                        
                        if (confirm(`Se han encontrado ${imported.length} presets. ¿Deseas UNIRLOS a los actuales? (Aceptar) o REEMPLAZARLOS por completo (Cancelar)?`)) {
                            // Merge: evitar duplicados por nombre
                            const merged = [...current];
                            imported.forEach(p => {
                                const idx = merged.findIndex(m => m.name === p.name);
                                if (idx === -1) merged.push(p);
                                else merged[idx] = p; // Sobrescribir si existe
                            });
                            localStorage.setItem(PRESETS_KEY, JSON.stringify(merged));
                        } else {
                            if (confirm("Se perderán todos los presets actuales. ¿Continuar?")) {
                                localStorage.setItem(PRESETS_KEY, JSON.stringify(imported));
                            }
                        }
                        
                        renderPresetsList();
                        showToast("Presets importados con éxito");
                    } catch (err) {
                        alert("Error al importar: El archivo no es un preset válido.");
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        }

        // --- INICIALIZACIÓN DE EVENTOS (Ruta 3) ---
        const debouncedSearch = debounce((val) => handleSearch(val), 300);

        const searchSidebar = document.getElementById('search-input-sidebar');
        if (searchSidebar) {
            searchSidebar.addEventListener('input', (e) => debouncedSearch(e.target.value));
        }

        const searchMain = document.getElementById('search-input');
        if (searchMain) {
            searchMain.addEventListener('input', (e) => debouncedSearch(e.target.value));
        }

        document.getElementById('btn-random')?.addEventListener('click', setRandom);
        
        // Botones de alternancia manual
        document.getElementById('btn-toggle-face')?.addEventListener('click', () => {
            document.getElementById('var-face').value = 'MANUAL';
            toggleManual();
        });
        document.getElementById('btn-toggle-clothing')?.addEventListener('click', () => {
            document.getElementById('var-clothing').value = 'MANUAL';
            toggleManualClothing();
        });
        
        // Delegación de eventos para botones generados dinámicamente o con IDs específicos
        document.getElementById('btn-save-preset')?.addEventListener('click', saveCurrentAsPreset);
        document.getElementById('btn-export-presets')?.addEventListener('click', exportPresets);
        document.getElementById('btn-import-presets')?.addEventListener('click', importPresets);
        document.getElementById('btn-open-sig')?.addEventListener('click', openSignaturePad);
        document.getElementById('btn-close-sig')?.addEventListener('click', closeSignaturePad);
        document.getElementById('btn-clear-sig')?.addEventListener('click', clearSignature);
        document.getElementById('btn-save-sig')?.addEventListener('click', saveSignature);

        // Escuchar cambios en todos los selects para actualizar la vista
        document.querySelectorAll('.variables-grid select').forEach(select => {
            select.addEventListener('change', () => {
                if (select.id === 'var-face') toggleManual();
                if (select.id === 'var-clothing') toggleManualClothing();
                updateView();
            });
        });

        // Escuchar cambios en inputs manuales
        document.getElementById('var-face-manual')?.addEventListener('input', updateView);
        document.getElementById('var-clothing-manual')?.addEventListener('input', updateView);
        document.getElementById('var-signature')?.addEventListener('input', updateView);

        // --- FIRMA PAD EVENTOS ---
        document.getElementById('btn-open-sig')?.addEventListener('click', openSignaturePad);
        document.getElementById('btn-close-sig')?.addEventListener('click', closeSignaturePad);
        document.getElementById('btn-clear-sig')?.addEventListener('click', clearSignature);
        document.getElementById('btn-save-sig')?.addEventListener('click', saveSignature);

        // --- INICIALIZACIÓN FINAL ---
        document.addEventListener('DOMContentLoaded', () => {
            init();
            renderPresetsList();
        });