

export function Child({props}){
    return (
        <div>
            {
                props.map(ele => <p>{ele}</p>)
            }
        </div>
    )
}