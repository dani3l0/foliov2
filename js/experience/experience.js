import loadScene from './core'

loadScene("untitled", (node) => {
    console.log(node)
    if (["test"].includes(node.name)) return false
    return true
})