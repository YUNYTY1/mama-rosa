// Título de dos niveles: una línea "lead" y una línea principal.
// Las clases de fuente/tamaño/color se pasan desde cada sección.
export default function SectionTitle({ lead, leadClass = '', main, mainClass = '', id }) {
  return (
    <h2 id={id}>
      <span className={`block ${leadClass}`}>{lead}</span>
      <span className={`block ${mainClass}`}>{main}</span>
    </h2>
  )
}
