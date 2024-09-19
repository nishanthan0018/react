
const parent=React.createElement("div",{id:"parent"} ,
    React.createElement("div",{id:"child"},[React.createElement('h1',{},"Iamh1tag"),React.createElement('h2',{},"Iamh2tag")]),
    React.createElement("div",{id:"child2"},[React.createElement('h1',{},"Iamh1tag"),React.createElement('h2',{},"Iamh2tag")])
)

// const heading= React.createElement("h1",{id:"heading"},"Hello react ")

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

console.log(parent)



