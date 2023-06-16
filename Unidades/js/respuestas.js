let correctas = [
    {   
        num: 0,
        correcta: "",
        opciones: [""]
    },
];

let respuestas = [
    {   
        html_num: 0,
        html:
        `
        <div class="respuestas" onclick="seleccionar(this,0)">
            <span>${correctas[0].opciones[0]}</span>

            <div class="iconos--verificacion oculto">
            <span class="material-icons-outlined">task_alt</span>
            </div>
            <div class="iconos--verificacion oculto">
            <span class="material-icons-outlined">cancel</span>
            </div>
        </div>

        <div class="respuestas" onclick="seleccionar(this,0)">
            <span>${correctas[0].opciones[1]}</span>

            <div class="iconos--verificacion oculto">
            <span class="material-icons-outlined">task_alt</span>
            </div>
            <div class="iconos--verificacion oculto">
            <span class="material-icons-outlined">cancel</span>
            </div>
        </div>

        <div class="respuestas" onclick="seleccionar(this,0)">
            <span>${correctas[0].opciones[2]}</span>

            <div class="iconos--verificacion oculto">
            <span class="material-icons-outlined">task_alt</span>
            </div>
            <div class="iconos--verificacion oculto">
            <span class="material-icons-outlined">cancel</span>
            </div>
        </div>

        <div class="respuestas" onclick="seleccionar(this,0)">
            <span>${correctas[0].opciones[3]}</span>

            <div class="iconos--verificacion oculto">
            <span class="material-icons-outlined">task_alt</span>
            </div>
            <div class="iconos--verificacion oculto">
            <span class="material-icons-outlined">cancel</span>
            </div>
        </div>

        </div>
        <div class="verificar--actividad">
        <div class="btns--actividad">
            
        </div>
        <div class="explicacion--actividad oculto">
            <span>Las obligaciones se encuentran ubicadas dentro de los derechos subjetivos que son aquellos sobre los cuales puede ser titular un sujeto jurídico cualquiera y son derechos personales.</span>
        `
    },
];