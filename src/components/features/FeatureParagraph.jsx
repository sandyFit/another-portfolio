import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';

const FeatureParagraph = ({children}) => {
    const ref = useRef(null); // Removed TypeScript annotation
    const isInView = useInView(ref, {
        margin: '-45% 0px -40% 0px',
    });

    return (
        <p
            ref={ref}
            className={classNames(
                'font-ibm text-[2.2rem] font-[400] transition-colors tracking-wider leading-tight',
                isInView ? 'text-zinc-100' : 'text-orangi-100 '
            )}
        >
            {children}
        </p>
    );
}

export default FeatureParagraph;
