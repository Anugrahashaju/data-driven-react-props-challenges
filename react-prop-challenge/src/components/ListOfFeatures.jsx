export function ListOfFeatures({appFeatures})
{
    return(
        <>
        <h2>List of Features</h2>
        <ul>

            {appFeatures.map((appFeatures)=>(
            <li>{appFeatures}</li> 
            ))}

        </ul>
        </>
    );
};