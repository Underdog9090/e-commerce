export default function About({ blok }) {
    console.log("ABOUT blok:", blok);

    return (
        <div>
            <h1>{blok?.title}</h1>
            {Array.isArray(blok?.content) ? (
                blok.content.map((item, index) => (
                    <p key={index}>{item}</p> // Adjust based on the actual structure of item
                ))
            ) : (
                <p>{blok?.content}</p>
            )}
        </div>
    );
}
