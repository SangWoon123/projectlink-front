<template>
    <div class="frame">
        <header class="header">
            <div class="round"></div>
            <div>닉네임</div>
        </header>
        <body class="body">
            <div class="title">[제목] 프로젝트 모집글</div>
            <div class="date">2024.01.04 ~ 2024.01.24</div>
            <ul class="img_list">
                <li class="main_img" v-for="index in 3" :key="index"></li>
            </ul>
        </body>
        <footer class="footer">
            <div>n개, 댓글보기</div>
            <div class="img_parent">
                <img class="img" src="../../assets/heart.png" alt="" />
                <img class="img" src="../../assets/ribbon.png" alt="" />
                <img class="img" src="../../assets/conversation.png" alt="" />
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'BoardPage',
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
.frame {
    width: 330px;
    height: 360px;
    border: 1px;
    border-radius: 35px;
    background-color: antiquewhite;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.header {
    padding: 20px;
    display: flex;
    align-items: center;
}
.round {
    width: 36px;
    height: 36px;
    border-radius: 99px;
    background-color: brown;
    margin-right: 10px;
}
.body {
    position: absolute;
    width: 100%;
    height: 206px;
}
.footer {
    position: absolute; /* 절대 위치로 설정합니다. */
    bottom: 0; /* 부모 요소의 아래쪽에 위치하도록 합니다. */
    width: 100%;
    height: 64px;
    border-radius: 0 0 35px 35px;
    background-color: aqua;
    box-sizing: inherit;

    display: flex;
    justify-content: space-around;
    align-items: center;
}
.img_list {
    list-style: none;
    display: flex;
}
.main_img {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 25px;
}
.img_parent {
    display: block;
    justify-content: space-between;
}
.img {
    width: 25px;
    height: 25px;
    margin: 0 5px 0 5px;
}
.title {
    display: flex;
    font-size: 25px;
    margin-left: 15px;
}
.date {
    display: flex;
    margin: 5px 0 0 15px;
    font-size: 15px;
}
</style>
