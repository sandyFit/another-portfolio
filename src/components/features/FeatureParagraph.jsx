import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';

const FeatureParagraph = ({children}) => {
    const ref = useRef(null); // Removed TypeScript annotation
    const isInView = useInView(ref, {
        margin: '-45% 0px -80% 0px',
    });

    return (
        <p
            ref={ref}
            className={classNames(
                'font-ibm text-[2.2rem] font-[300] transition-colors tracking-wider leading-tight',
                isInView ? 'text-zinc-300' : 'text-zinc-500 '
            )}
        >
            {children}
        </p>
    );
}

export default FeatureParagraph;
