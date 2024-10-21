const ParagrafoVisivel = ({ isVisible }) => {
    if (isVisible){
    return (
      <div>
        <p>O parágrafo está visível</p>
      </div>
    );
  }else{
    return(
        <p>Não está visivel</p>
    )
  }
}
  
  export default ParagrafoVisivel;