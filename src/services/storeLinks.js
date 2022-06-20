
export async function getlinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


export async function saveLink(key, newLink){
    let LinkStored = await getlinksSave(key);

    const hasLink = LinkStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('LINK DUPLICADO!!');
        return;
    }

    LinkStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(LinkStored))
    console.log('LINK SALVO COM SUCESSO!!');
}

export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@shortLink', JSON.stringify(myLinks))
    console.log('LINK DELETADO COM SUCESSO!!');
    return myLinks;
}