import React from "react";

import {Box, ResponsiveContext, Text, TextInput} from "grommet";

import GradientText from "../../components/GradientText";
import Card from "../../components/Card";
import Concave from "../../components/Concave";
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

    const calcul = () => {
        setWater(flour*(hydratation/100));
        setYeast(flour*0.02);
        setSalt(flour*0.02);
        setCalculated(true);
    }

    const [hydratation, setHydratation] = useStateWithLocalStorageInt('hydratation');
    const [flour, setFlour] = useStateWithLocalStorageInt('flour');
    const [water, setWater] = useStateWithLocalStorageInt('water');
    const [yeast, setYeast] = useStateWithLocalStorageInt('yeast');
    const [salt, setSalt] = useStateWithLocalStorageInt('salt');

    const [calculated, setCalculated] = React.useState(false)

    React.useEffect(()=> {
        setHydratation(75)
        setFlour(500)
        calcul();
    }, [])

    const size = React.useContext(ResponsiveContext);

    return (
        <Card round="small" align="center" pad="medium" gap="medium">
            <GradientText>Bread Calculator</GradientText>
            
            <Card round="small" pad="medium" align="center" justify="center">
                <Box direction={size==="small" ? "column" : "row"} gap="medium" align="center" justify="center">
                    <Box align="center" justify="center">
                        <Text>Flour (g)</Text>
                        <Concave round="medium" margin="medium">
                            <TextInput size ="small" plain onChange={e=>setFlour(e.target.value)} type="number" value={flour} textAlign="center">

                            </TextInput>
                        </Concave>
                    </Box>
                
                    <Box align="center" justify="center">
                        <Text>Hydratation (%)</Text>
                        <Concave round="medium" margin="medium">
                            <TextInput size ="small" plain onChange={e=>setHydratation(e.target.value)} type="number" value={hydratation} textAlign="center">

                            </TextInput>
                        </Concave>
                    </Box>
                </Box>
            </Card>
            
            <Box>
                <ConcaveButton round="small" pad="medium" align="center" justify="center" onClick={()=> calcul()}>
                    <GradientText>Calculate</GradientText>
                </ConcaveButton>
            </Box>

            
                <Box direction="row" align="center" justify="center" gap="medium">
                    <Card round="small" pad="medium" align="center" justify="center" fill>
                        <Text>Flour</Text>
                        <Text>{flour}g</Text>
                    </Card>
                    <Card round="small" pad="medium" align="center" justify="center" fill>
                        <Text>Water</Text>
                        <Text>{water}g</Text>
                    </Card>
                    <Card round="small" pad="medium" align="center" justify="center" fill>
                        <Text>Yeast</Text>
                        <Text>{yeast}g</Text>
                    </Card>
                    <Card round="small" pad="medium" align="center" justify="center" fill>
                        <Text>Salt</Text>
                        <Text>{salt}g</Text>
                    </Card>
                </Box>
           
            

        </Card>
    )
}

export default Calculator;