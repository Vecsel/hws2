import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#3f51b5',
                width: 300,
                height: 30,
                '& .MuiSlider-thumb': { // стили для ползунка
                    width: 20,
                    height: 20,
                    backgroundColor: '#3f51b5',
                    border: '1px solid currentColor',


                },
                '& .MuiSlider-track': { // стили для полоски
                    height: 6,
                    borderRadius: 4,
                },
                '& .MuiSlider-rail': { // стили для полоски
                    height: 6,
                    borderRadius: 4,

                }

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
