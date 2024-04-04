<template>
    <div class="comment">
        <div class="profile_image"></div>
        <div class="content">
            <span style="font-size: 12px; font-weight: 600">닉네임</span>
            <span style="margin-left: 10px; font-size: 12px">n초전</span>
            <div style="font-size: 15px">{{ item.content }}</div>
            <button type="button" class="comment-button" @click="togglePopup">답글달기</button>
        </div>
        <div style="width: 15%">
            <img src="../../assets/heart.png" style="width: 20px" />
        </div>

        <!-- 대댓글 입력 팝업 -->
        <div v-if="showPopup" class="popup">
            <input type="text" v-model="newReply" placeholder="대댓글을 입력하세요" />
            <button @click="submitReply">작성</button>
        </div>
        <!-- 대댓글 목록 -->
    </div>

    <div class="replies" v-for="(reply, replyIndex) in item.replies" :key="replyIndex">
        <ReplyComment :replyItem="reply" />
    </div>
</template>

<script>
import axios from 'axios';
import ReplyComment from './ReplyComment.vue';

export default {
    name: 'CommentComponent',
    components: {
        ReplyComment,
    },
    props: ['commentItem'],
    data() {
        return {
            item: this.commentItem,
            showPopup: false,
            newReply: '', // 대댓글 입력값을 저장하는 데이터
        };
    },
    methods: {
        togglePopup() {
            this.showPopup = !this.showPopup;
        },
        submitReply() {
            // 대댓글을 추가하는 메서드

            const url = 'http://localhost:8080/api/private/comment';
            const token =
                'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxMjIzODAwNSwidXNlcl91bmlxdWVfaWQiOiIxIn0.wmnxYslD5L6fGflZoOyx8G1Iq6croiYWtqeAfRhq-y9Wb7aEPVQNfbQgPApFw6lbwgyRgckWr7PlCUqrrpVxFg';

            const data = {
                boardId: this.item.boardId,
                parentId: this.item.id,
                content: this.newReply,
            };
            axios
                .post(url, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    console.log(res);
                    const result = res.data.data;
                    this.item.replies.push(result);
                });
            this.newReply = ''; // 입력값 초기화
            this.togglePopup(); // 팝업 닫기
        },
    },
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
.comment {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: antiquewhite;
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
.comment-button {
    font-size: 10px;
    font-weight: 300;
    border: none;

    background-color: transparent; /* 배경색 투명하게 설정 */
    border: none; /* 테두리 없애기 */
    color: #2a2a2a4b; /* 버튼 글자 색상 설정 */
    font-weight: bold; /* 원하는 글자 굵기로 설정 */
    cursor: pointer; /* 마우스 포인터 모양 설정 */
}

.popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
}
.replies {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: wheat;
}
</style>
