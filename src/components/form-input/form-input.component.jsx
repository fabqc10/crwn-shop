import {FormInputLabel, Group, Input} from './form-input.styles'
const FormInput = ({label, ...otherProps}) => {
    return(
        <Group>
            <Input {...otherProps}/>
            { label && (<FormInputLabel
                shrink = {otherProps.value.lenght}
                    >
                        {label}
                    </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;