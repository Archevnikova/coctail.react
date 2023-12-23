

function Card (props){
    return(

<div className="card" style={{width: 180}}>
  <img src={props.img} className="card-img-top" style={{width:180}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">Выбрать</a>
  </div>
</div>
    )
}

export default Card;