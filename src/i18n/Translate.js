import React, { PropTypes } from 'react';

const translate = (BaseComponent) => {
    const TranslatedComponent = (props, context) => (
        <BaseComponent
            translate={context.translate}
            locale={context.locale}
            {...props}
        />
    );

    TranslatedComponent.contextTypes = {
        translate: PropTypes.func.isRequired,
        locale: PropTypes.string.isRequired,
    };

    TranslatedComponent.displayName = `Translated${BaseComponent.name}`;
    TranslatedComponent.defaultProps = BaseComponent.defaultProps;

    return TranslatedComponent;
};

export default translate;
