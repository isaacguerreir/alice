import React from 'react'
import { createUseStyles, useTheme, Styles } from 'react-jss'


type ReactJSSProps = { classes?: ReturnType<ReturnType<typeof createUseStyles>> }

/**
 * Creates a Higher Order Component that injects the CSS specified in `styles`.
 * @param styles
 */

export function withStyles<C extends string, Pr extends ReactJSSProps, T>(
    styles: Styles<C, Pr, T> | ((theme: T) => Styles<C, Pr>)
) {
    return function <P extends Pr, S>(WrappedComponent: React.ComponentClass<P, S>): React.FC<P> {
        const useStyles = createUseStyles<C, P, T>(styles)

        const StyledComponent: React.FC<P> = (props: P) => {
            const { classes, ...passThroughProps } = props
            const theme = useTheme<T>()
            const reactJssClasses = useStyles({ ...(passThroughProps as P), theme })
            return <WrappedComponent { ...passThroughProps as P } classes = { reactJssClasses } />
    	}

        StyledComponent.displayName = `withStyles(${WrappedComponent.name})`
        
	return StyledComponent
    }
}

