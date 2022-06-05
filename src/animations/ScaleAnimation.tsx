import {Box, keyframes} from '@chakra-ui/react';
import React from 'react';
import {motion} from 'framer-motion';

const scaleUpKeyframes = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(2); }
`;
const scaleDownKeyframes = keyframes`
    0% { transform: scale(2); }
    100% { transform: scale(1); }
`;

const scaleUpAnimation = `${scaleUpKeyframes} 1s ease-in-out`;
const scaleDownAnimation = `${scaleDownKeyframes} 1s ease-in-out`;

export const SCALE_UP = 'scaleUp';
export const SCALE_DOWN = 'scaleDown';

const computeAnimation = (type: string) => {
    switch (type) {
        case SCALE_UP:
            return scaleUpAnimation;
        case SCALE_DOWN:
            return scaleDownAnimation;
        default:
            return undefined;
    }
}

const ScaleAnimation = (props: {
    type: string;
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}) => {
    return (
        <Box as={motion.div}
             animation={computeAnimation(props.type)}>
            {props.children}
        </Box>
    );
}

export default ScaleAnimation;
