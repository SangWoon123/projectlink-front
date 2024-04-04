<template>
    <div class="reply">
        <div class="profile_image"></div>
        <div class="content">
            <span style="font-size: 12px; font-weight: 600">닉네임</span>
            <span style="margin-left: 10px; font-size: 12px">시간</span>
            <div style="font-size: 15px">{{ replyItem.content }}</div>
            <button type="button" class="comment-button" @click="togglePopup">답글달기</button>
        </div>
        <div style="width: 15%">
            <img src="../../assets/heart.png" style="width: 20px" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReplyItem',
    props: {
        replyItem: Object,
    },
    data() {
        return {
            showPopup: false,
        };
    },
    methods: {
        togglePopup() {
            this.showPopup = !this.showPopup;
        },
    },
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
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
.reply {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: lightgrey;
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
</style>
