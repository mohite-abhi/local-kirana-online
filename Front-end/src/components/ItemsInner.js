import React from 'react'



export const ItemsInner = ({todos}) => {
    console.log(todos)
    return (
        <div className="container" key={todos.sno}>
            <h3 className=" my-3" >Todos List</h3>

            {
                
                    todos.map((todo) => {
                        return (
                            <div>
                                
                                <h4>{todo.title}</h4>
                                <p>{todo.desc}</p>
                            </div>
                        )
                    })
                
            }

        </div>
    )
}
