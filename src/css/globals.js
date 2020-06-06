import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *,*::before,*::after {
        padding:0px;
        margin:0px;
        box-sizing:border-box;
        border:none;
        outline:none;
    }
    
    :root {
        font-size:14px;
    }

    html,body,#root {
        width:100%;
        height:100%;       
    }

    body {
        font-family:"Nunito Sans";
        font-size:16px;        
        color:#111517; /*hsl(200, 15%, 8%);*/
        background-color:#fafafa; /*hsl(0, 0%, 98%);*/
    }

    .darkMode {
        color:hsl(0, 0%, 100%);
        background-color:hsl(207, 26%, 17%);

        .Input_DarkMode {
            background-color:hsl(209, 23%, 22%);s
        }
    }

   
`;
