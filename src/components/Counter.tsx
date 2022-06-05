import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../store/counter';
import {Box, Button, Center, Container, Heading, Stack, VStack} from '@chakra-ui/react';
import {RepeatClockIcon} from '@chakra-ui/icons';
import ScaleAnimation, {SCALE_DOWN, SCALE_UP} from '../animations/ScaleAnimation';
import {useBackground} from '../hooks/use-background';
import {AppDispatch, AppState} from '../store';

const DIRECTION_FORWARD = 'forward';
const DIRECTION_BACKWARD = 'backward';

const Counter = () => {
    const dispatch: AppDispatch = useDispatch();
    const count = useSelector((state: AppState) => state.counter.count);
    const [isCounting, setIsCounting] = useState(true);
    const [direction, setDirection] = useState(DIRECTION_FORWARD);
    const [transitionType, setTransitionType] = useState(SCALE_UP);

    useEffect(() => {
        let counter: NodeJS.Timer;
        if (isCounting) {
            counter = setInterval(() => {
                direction === DIRECTION_FORWARD ? dispatch(counterActions.countBackward()) : dispatch(counterActions.countForward());
                setTransitionType((prev) => prev === SCALE_UP ? SCALE_DOWN : SCALE_UP);
            }, 1000);
        }

        return () => {
            clearTimeout(counter);
        };
    }, [isCounting, direction, dispatch]);

    useBackground();

    return (
        <Center h={'xl'}>
            <VStack spacing={20} align={'center'}>
                <Container display="flex"
                           alignItems="center"
                           justifyContent="center">
                    <ScaleAnimation type={transitionType}>
                        <Box
                            borderRadius={'100%'}
                            padding="10"
                            bg="gray.100"
                            shadow={'md'}
                            display="flex">
                            <Heading size={'3xl'}>{count}</Heading>
                        </Box>
                    </ScaleAnimation>
                </Container>
                <Stack direction="row" spacing={5}>
                    <Button leftIcon={<RepeatClockIcon/>}
                            colorScheme={'teal'}
                            size={'lg'}
                            onClick={() => setDirection(direction === DIRECTION_FORWARD ? DIRECTION_BACKWARD : DIRECTION_FORWARD)}>
                        Reverse
                    </Button>
                    <Button colorScheme={isCounting ? 'red' : 'teal'}
                            size={'lg'}
                            onClick={() => setIsCounting((crtIsCounting) => !crtIsCounting)}>
                        {isCounting ? 'Stop' : 'Resume'}
                    </Button>
                </Stack>
            </VStack>
        </Center>
    );
}

export default Counter;
