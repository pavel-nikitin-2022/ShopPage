import ReactAnime from 'react-animejs';
const { Anime } = ReactAnime;

/**
 * Создание анимации одной волны
 * @param props - свойства
 * @param props.waves - массив с крайними состояниями
 * @param props.duration - время длительности одной конкретной анимации
 */
function Wave({ waves = [], duration = 7500, id = '' }: { waves: Array<string>, duration: number, id: string }) {
    return (
        <Anime
            initial={[
                {
                    targets: `#${id}`,
                    easing: 'linear',
                    duration: duration,
                    loop: true,
                    d: [
                        { value: [waves[0], waves[1]] },
                        { value: waves[2] },
                        { value: waves[3] },
                        { value: waves[4] },
                    ],
                }
            ]}
        >
            <svg
                style={{ marginTop: '3%', opacity: 0.12 }}
                width="100%"
                height="28"
                viewBox="0 0 359 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id={id}
                    d="M0 0C38.5643 0 231.076 0 358.998 0V10.5C196.998 10.5 137.634 27.5 0 27.5L0 0Z"
                    fill="url(#paint0_linear_301_35)"
                />

                <defs>
                    <linearGradient
                        id="paint0_linear_301_35"
                        x1="178.993"
                        y1="0"
                        x2="178.993"
                        y2="21"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                    </linearGradient>
                </defs>

            </svg>
        </Anime>
    );
}

export default Wave;