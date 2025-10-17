    /* • Persona 3: Implementación de la funcionalidad para agregar nuevos estudiantes mediante el
    modal */
    let students = [];
    document.getElementById('addStudentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newStudent = {
            id: Date.now(),
            name: formData.get('name'),
            age: formData.get('age'),
            pais: formData.get('pais')
        };
        addStudent(newStudent);
        event.target.reset();
        closeModal();
    });
