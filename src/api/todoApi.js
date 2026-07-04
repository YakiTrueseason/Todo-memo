    //Todo API まとめ

import API_BASE_URL from "./api";

    // 一覧取得
    export async function getTodos() {
        const response = await fetch(`${API_BASE_URL}/todos`);
        if(!response.ok){
            throw new Error("Todo取得に失敗しました");
        }
        return await response.json();
    }

    // Todo追加
export async function addTodo ({
    name,
    date,
    priority,
    tag,
    completed = false
}){
        const response = await fetch(`${API_BASE_URL}/todos`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                date,
                priority,
                tag,
                completed
            })
        });
        if(!response.ok){
            throw new Error("Todo追加に失敗しました");
        }
        return await response.json();
    }

    //Todo編集
export async function updateTodo(todo){
        const response = await fetch(`${API_BASE_URL}/todos/${todo.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(todo)
        });
        if(!response.ok){
            throw new Error("Todo更新に失敗しました");
        }
        return await response.json();
}
    //Todo削除
export async function deleteTodo(id){
        const response = await fetch(
            `${API_BASE_URL}/todos/${id}`,
            {
                method:"DELETE"
            });
        if(!response.ok){
            throw new Error("Todo削除に失敗しました");
        }
        return await response.json();
    }