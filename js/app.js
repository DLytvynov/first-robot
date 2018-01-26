window.onload = function () {
    const TOP = 1;
    const BOTTOM = 2;
    const LEFT = 3;
    const RIGHT = 4;

    const LEFT_DIR = 'ArrowLeft';
    const RIGHT_DIR = 'ArrowRight';
    const TOP_DIR = 'ArrowUp';
    const BOTTOM_DIR = 'ArrowDown';

    let robot = document.querySelector('#img');
    let mine = document.querySelector('#mine');
    let mine_x = parseInt(window.getComputedStyle(mine).left);
    let mine_y = parseInt(window.getComputedStyle(mine).top);

console.log(mine_x, mine_y);

    $(document).on('keydown', function (e) {
        //console.log(e.key);
        let dir = false;
        switch (e.key) {
            case LEFT_DIR:
                dir = LEFT;
                break;
            case RIGHT_DIR:
                dir = RIGHT;
                break;
            case TOP_DIR:
                dir = TOP;
                break;
            case BOTTOM_DIR:
                dir = BOTTOM;
                break;

        }

        if (dir) {
            go(robot, 10, dir);
        }
    });
    

    function go(robot, step, dir) {
        let x = parseInt(window.getComputedStyle(robot).left);
        let y = parseInt(window.getComputedStyle(robot).top);

        switch (dir){
            case TOP:
                y -= step;
                break;
            case BOTTOM:
                y += step;
                break;
            case LEFT:
                x -= step;
                break;
            case RIGHT:
                x += step;
                break;
        }

        let screenW = document.documentElement.clientWidth;
        let screenH = document.documentElement.clientHeight;

        if (x > screenW - 200) {
            robot.style.left = 0;
        }
        else if (x < 0) {
            robot.style.left = (screenW - 200) + 'px';
        }
        else {
            robot.style.left = x + 'px';
        }

        if (y > screenH - 200) {
            robot.style.top = 0;
        }
        else if (y < 0) {
            robot.style.top = (screenH - 200) + 'px';
        }
        else {
            robot.style.top = y + 'px';
        }

        //console.log('X = ' + robot.style.left + '; Y = ' + robot.style.top);

        x = parseInt(window.getComputedStyle(robot).left);
        y = parseInt(window.getComputedStyle(robot).top);

        if ((x > mine_x - 150 && x < mine_x)
        && (y > mine_y - 150 && y < mine_y))
        {
            robot.style.display = 'none';
            mine.style.display = 'none';
            boom.style.display = 'block';

            $('#next').css('display','block')
        }
    }//go

    $('#next').on('click', function () {
        $(this).css('display','none');
        robot.style.left = 0;
        robot.style.top = 0;
            robot.style.display = 'block';
        mine.style.display = 'block';
        boom.style.display = 'none';

    });
};


