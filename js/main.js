function castleStart(){
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');

    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);

    for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    }

    function dragStart() {
    fillClasses = this.closest("td").classList;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

    }

    function dragEnd() {
    this.className = 'fill';
    }

    function dragOver(e) {
    e.preventDefault();
    }

    function dragEnter(e) {
    e.preventDefault();
    if (this.classList[1] === fillClasses[1] || this.classList[2] === fillClasses[2]) {
        this.className += ' hovered';
    } 
    }

    function dragLeave() {
    this.classList.remove("hovered")    
    }

    function dragDrop() {
    if (this.classList[1] === fillClasses[1] || this.classList[2] === fillClasses[2]) {
        this.classList.remove("hovered")  
        this.append(fill);
    } 
    }
}

castleStart();
