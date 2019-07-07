function castleStart(){
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    var fillClasses;

    // Fill listeners
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);

    // Loop through empty boxes and add listeners
    for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    }

    // Drag Functions

    class Castle {
        
        dragStart() {
            fillClasses = this.closest("td").classList;
            this.className += ' hold';
            setTimeout(() => (this.className = 'invisible'), 0);
        }

        dragEnd() {
            this.className = 'fill';
            }
        
        dragOver(e) {
            e.preventDefault();
            }
        
        dragEnter(e) {
            e.preventDefault();
            
            if (this.classList[1] === fillClasses[1] || this.classList[2] === fillClasses[2]) {
                this.className += ' hovered';
            } 
            }
        
        dragLeave() {
            // this.className = 'empty';
            this.classList.remove("hovered")    
            }
        
        dragDrop() {
            // this.className = 'empty';
            if (this.classList[1] === fillClasses[1] || this.classList[2] === fillClasses[2]) {
                this.classList.remove("hovered")  
                this.append(fill);
            } 
            }

    }

    function dragStart() {
        Castle.dragStart();
    }

    function dragEnd() {
        Castle.dragEnd();
    }

    function dragOver(e) {
        Castle.dragOver();
    }

    function dragEnter(e) {
        Castle.dragEnter();
    }

    function dragLeave() {
        Castle.dragLeave();   
    }

    function dragDrop() {
        Castle.dragDrop();
    }
}


castleStart();



