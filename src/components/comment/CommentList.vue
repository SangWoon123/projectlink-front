<template>
    <form @submit.prevent="createComment">
        <input type="text" placeholder="text 입력" v-model="comment" />
        <button @keyup.enter="createComment">제출</button>
    </form>
    <div v-for="(commentItem, index) in commentList" :key="index" class="frame">
        <CommentListItem :commentItem="commentItem" />
    </div>
</template>

<script>
import CommentListItem from './CommentListItem.vue';
import axios from 'axios';

export default {
    components: {
        CommentListItem,
    },
    data() {
        return {
            comment: null,
            commentList: [],
            newReply: [], // 각 댓글에 대한 대댓글 입력값을 저장하는 배열
        };
    },
    methods: {
        createComment() {
            const url = 'http://localhost:8080/api/private/comment';
            const token =
                'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcxMjIzODAwNSwidXNlcl91bmlxdWVfaWQiOiIxIn0.wmnxYslD5L6fGflZoOyx8G1Iq6croiYWtqeAfRhq-y9Wb7aEPVQNfbQgPApFw6lbwgyRgckWr7PlCUqrrpVxFg';

            const data = {
                boardId: 1,
                content: this.comment,
            };
            axios
                .post(url, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    this.commentList.push(res.data.data);
                });

            // 입력란 초기화
            this.comment = null;
        },
    },
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
.frame {
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: wheat;
}
</style>
