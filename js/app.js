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

        robot.style.left = x + 'px';
        robot.style.top = y + 'px';
    }//go

};


