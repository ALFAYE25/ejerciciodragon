import{estudiantes_Funval} from "./jaime.js";

export function editarEstudiante(index) {
  let est = estudiantes_Funval[index];

  let nuevoNombre = prompt("Editar nombre:", est.nombre);
  let nuevaEdad = prompt("Editar edad:", est.edad);
  let nuevoPais = prompt("Editar país:", est.pais);
  let nuevaNota = prompt("Editar nota:", est.nota);

  
  if (
    nuevoNombre !== null &&
    nuevaEdad !== null &&
    nuevoPais !== null &&
    nuevaNota !== null
  ) {
    
    est.nombre = nuevoNombre.trim() || est.nombre;
    est.edad = parseInt(nuevaEdad) || est.edad;
    est.pais = nuevoPais.trim() || est.pais;
    est.nota = parseFloat(nuevaNota) || est.nota;

    mostrarTabla();
    alert("Estudiante actualizado correctamente");
  }
}
