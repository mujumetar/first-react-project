

export function Parent({props}){
    
    const {name, surname, age, role} = props;


    return (
        <div>
           <h1>{name}</h1>
           <h1>{surname}</h1>
           <h1>{age}</h1>
           <h1>{role}</h1>
        </div>
    )
}