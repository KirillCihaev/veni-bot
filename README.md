<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">

        <style>

            * {
                box-sizing: border-box;
            }

            body {
                background: url('https://kirillcihaev.github.io/veni-bot/img/black.jpg') no-repeat;
                background-size: cover;
                color:#fff;
            }

            a {
                text-decoration: none;
                color: #fff;
            }

            .git-wrapp {
                margin-top: 120px;
                margin-bottom: 120px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                flex-direction: column;
            }
            .venibot-buttons {
                width: 320px;
                height: 80px;
                border: 5px solid #fff;
                border-radius: 50px;
                font-style: normal;
                font-weight: normal;
                font-size: 32px;
                line-height: 44px;
                display: flex;
                justify-content: center;
                text-align: center;
                align-items: center;
                transition: background, border, 300ms linear;
            }

            .venibot-buttons:hover {
                background-color: rgba(0, 0, 0, 0.12);
                border: 10px double #fff;
            }
        </style>
    </head>
    <body>
        <div class="git-wrapp">
            <h1>veni-bot</h1>
            <a href="https://kirillcihaev.github.io/veni-bot" target="_blank" class="venibot-buttons">сайт дискорд бота</a><br>
            <a href="https://discord.com/api/oauth2/authorize?client_id=728030884179083354&permissions=8&scope=bot" target="_blank" class="venibot-buttons">Пригласить бота</a>
        </div>
    </body>
</html>
