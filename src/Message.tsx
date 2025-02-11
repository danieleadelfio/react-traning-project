//Message.tsx e tutti gli altri tsx richiamati in App.tsx sono child

function Message() {
    const name = 'Daniele';
    if (name)
    return <h1>Hello {name}</h1>;
    else
    return <h1>Hello NoName</h1>;
}

export default Message;