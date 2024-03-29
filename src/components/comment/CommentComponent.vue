<template>
    <form @submit.prevent="createComment">
        <input type="text" placeholder="text 입력" />
        <button @keyup.enter="createComment">제출</button>
    </form>
    <div class="frame">
        <div class="profile_image"></div>
        <div class="content">
            <span style="font-size: 12px; font-weight: 600">닉네임</span>
            <span style="margin-left: 10px; font-size: 12px">n초전</span>
            <div style="font-size: 15px">당신의 댓글을 적어주세요.</div>
            <div style="font-size: 10px; font-weight: 300">답글달기</div>
        </div>
        <div style="width: 15%">
            <img src="../../assets/heart.png" style="width: 20px" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CommentComponent',
    methods: {
        createComment() {
            const url = 'http://localhost:8080/api/comment';
            const token = '';

            const data={
                "boardId":1,
                "content":"testComment"
            }
            axios.post(url,data,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
        },
    },
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
.frame {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: wheat;
}
.profile_image {
    width: 30px;
    height: 30px;
    border-radius: 200px;
    background-color: antiquewhite;
    margin-left: 10px;
    border: 1px solid violet;
}
.content {
    width: 75%;
    margin: 10px;
    text-align: justify;
}
</style>
