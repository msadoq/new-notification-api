import React from 'react';
import Chip from '@material-ui/core/Chip';
import { translate } from 'react-admin';
import segments from '../segments/data';

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

const SegmentsField = ({ record, translate }) => {
    //console.error(record);
    return ( 

    <span style={styles.main}>
        {   record.groups &&
            record.groups.map(segment => (
                <Chip
                    key={segment.id}
                    style={styles.chip}
                    label={translate(segments.find(s => s.id === segment.id).name)}
                />
            ))}
    </span>
    )}
;

const TranslatedSegmentsField = translate(SegmentsField);

TranslatedSegmentsField.defaultProps = {
    addLabel: true,
    source: 'groups',
};

export default TranslatedSegmentsField;
