    //Note API まとめ

import API_BASE_URL from "./api";

    // 一覧取得
    export async function getNotes() {
        const response = await fetch(`${API_BASE_URL}/notes`);
        if(!response.ok){
            throw new Error("メモ取得に失敗しました");
        }
        return await response.json();
    }

    // note追加
export async function addNote ({
    date,
    text
}){
        const response = await fetch(`${API_BASE_URL}/notes`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                date,
                text
            })
        });
        if(!response.ok){
            throw new Error("メモ追加に失敗しました");
        }
        return await response.json();
    }

    //note編集
export async function updateNote(note){
        const response = await fetch(`${API_BASE_URL}/notes/${note.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(note)
        });
        if(!response.ok){
            throw new Error("メモ更新に失敗しました");
        }
        return await response.json();
}
    // note削除
export async function deleteNote(id){
        const response = await fetch(
            `${API_BASE_URL}/notes/${id}`,
            {
                method:"DELETE"
            });
        if(!response.ok){
            throw new Error("メモ削除に失敗しました");
        }
        return await response.json();
    }