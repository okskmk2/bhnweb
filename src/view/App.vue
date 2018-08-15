<template>
    <div class="col" style="height:100vh">
        <header>
            <div class="wrap row">
                <router-link to="/"><h2>내 인생</h2></router-link>
                <div class="row rest jc-between ai-center">
                    <nav id="gnb">
                        <router-link to="/vision-board">비전보드</router-link>
                        <router-link to="/kanban">칸반</router-link>
                        <router-link to="/habit">습관관리</router-link>
                        <router-link to="/diary">일기</router-link>
                        <router-link to="/wiki">위키</router-link>
                        <router-link to="/calendar">달력</router-link>
                        <router-link to="/kakaotalk">메신저</router-link>
                    </nav>
                    <nav class="row">
                        <label class="mr05">현재 프로젝트</label>
                        <select class="mr05">
                            <option value="">내 인생</option>
                            <option value="">LSFWEB</option>
                            <option value="">솔루션PMS</option>
                        </select>
                        <button class="mr05">프로젝트 만들기</button>
                        <i class="material-icons mr05">account_circle</i>
                        <i class="material-icons">notifications</i>
                    </nav>
                </div>
            </div>
        </header>
        <div id="main" class="wrap">
        <router-view/>
        </div>
        <footer>
            <nav class="wrap gap1" style="text-align:right">
                <router-link to="/">로그인</router-link>
                <router-link to="/">지도</router-link>
                <router-link to="/">회원가입</router-link>
                <router-link to="/">이벤트</router-link>
                <router-link to="/">마켓</router-link>
                <router-link to="/">고객센터</router-link>
                <router-link to="/"><h1>바은</h1></router-link>
            </nav>
        </footer>
    </div>
</template>
<script>
export default {};
</script>
