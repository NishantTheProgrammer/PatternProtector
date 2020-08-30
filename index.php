<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pattern Protector</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="app" @mouseup="authenticate" >
        <div class="patternPanel" v-if="patternPanel">
            <h1>Draw Pattern</h1>
            <div class="nodeContainer">
                <div class="node" v-for="i in 9" @mouseover="hoverOnNode" :id="i">
                    <div></div>
                </div>
            </div>
        </div>
    <div class="form" v-else>
            <input type="email" id="email" placeholder="Email">
            <input type="submit" @click="patternPanel = true" value="Login">
        </div>
    </div>
</body>
<script src="./script.js"></script>
</html>