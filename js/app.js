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


    }//go

};


