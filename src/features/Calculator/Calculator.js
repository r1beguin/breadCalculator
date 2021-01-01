import React from "react";

import {Box, ResponsiveContext, Text} from "grommet";

import GradientText from "../../components/GradientText";
import Card from "../../components/Card";
import CardConcave from "../../components/CardConcave";
import ConcaveButton from "../../components/ConcaveButton";

const useStateWithLocalStorageInt = localStorageKey => {
    const [value, setValue] = React.useState(
      JSON.parse(localStorage.getItem(localStorageKey)) || '')
   
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);
   
    return [value, setValue];
  };


const Calculator = () => {

    const [hydratation, setHydratation] = useStateWithLocalStorageInt('hydratation');
    const [flour, setFlour] = useStateWithLocalStorageInt('flour');

    React.useEffect(()=> {
        setHydratation(75)
        setFlour(500)
    }, [])

    const size = React.useContext(ResponsiveContext);

    return (
        <Card round="small" align="center" pad="medium" gap="medium">
            <GradientText>Bread Calculator</GradientText>
            <Box direction={size==="small" ? "column" : "row"} gap="medium" align="center" justify="center">
                <Card round="small" pad="medium" align="center" justify="center">
                    <Text>Flour</Text>
                </Card>
                <Card round="small" pad="medium" align="center" justify="center">
                    <Text>Hydratation</Text>
                </Card>
            </Box>
            <Box>
                <ConcaveButton round="small" pad="medium" align="center" justify="center">
                    Calculate
                </ConcaveButton>
            </Box>
        </Card>
    )
}

export default Calculator;