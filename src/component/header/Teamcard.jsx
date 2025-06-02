const TeamCard = ({title,image}) =>{
    return(
        
            <div style={styles.TeamCard}>
                 <img src={image} title="" style={styles.image}/>
                <h3>{title}</h3>
            </div>
        
    );
}

 const styles ={
        TeamCard: {
    width: '250px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '16px',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px'
  }

    }
export default TeamCard;