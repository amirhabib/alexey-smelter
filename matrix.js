/**
 *  CONFLICT MINIRAL CMRT MATRIX
 * 
 *  Possible Statuses:
 *  ------------------
 * 
 *     Y    = YES
 *     N    = NO
 *     NA   = NOT APPLICABLE
 *     UK   = UNKNOWN
 *     PA   = PARTIAL
 * 
 */

const matrix = {
    'free': [
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['N'],
            q4: ['N'],
            q5: ['N', 'UK'],
            q6: ['Y'],
            q7: ['E'],
            q8: ['Y', 'NA'],
            smelter: ['LISTED']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['E'],
            q4: ['E'],
            q5: ['N'],
            q6: ['E'],
            q7: ['E'],
            q8: ['Y', 'NA'],
            smelter: ['LISTED']
        }, 
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['LISTED']
        },       
    ],
    'free-no-3tg': [
        {
            q1: ['N'],
            q2: ['N'],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['E']
        },
        {
            q1: ['Y'],
            q2: ['N'],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['E']
        },
        {
            q1: ['N'],
            q2: ['E'],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['E']
        },
    ],
    'undefined-from-drc': [
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['UNLISTED-FROM-DRC']
        }
    ],
    'undetermined': [
        {
            q1: ['Y', 'NA'],
            q2: ['Y',],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['N'],
            smelter: ['LISTED','UNLISTED']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['N','UK'],
            q4: ['N','UK'],
            q5: ['Y'],
            q6: ['PA', 'NA'],
            q7: ['N'],
            q8: ['E'],
            smelter: ['E']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['N','UK'],
            q4: ['N','UK'],
            q5: ['E'],
            q6: ['Y', 'NA'],
            q7: ['Y'],
            q8: ['E'],
            smelter: ['UNLISTED']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['N', 'UK'],
            q4: ['N', 'UK'],
            q5: ['N', 'UK'],
            q6: ['E'],
            q7: ['N'],
            q8: ['E'],
            smelter: ['E']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['N', 'UK'],
            q4: ['N', 'UK'],
            q5: ['N', 'UK'],
            q6: ['Y', 'NA'],
            q7: ['N'],
            q8: ['E'],
            smelter: ['E']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['N', 'UK'],
            q4: ['N', 'UK'],
            q5: ['N', 'UK'],
            q6: ['N', 'PA'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['E']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['UNLISTED']
        },
    ],
    'undetermined-from-drc': [
        {
            q1: ['Y', 'NA'],
            q2: ['Y',],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['N'],
            smelter: ['LISTED-FROM-DRC']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y',],
            q3: ['Y'],
            q4: ['Y'],
            q5: ['Y'],
            q6: ['PA', 'NA'],
            q7: ['N'],
            q8: ['E'],
            smelter: ['E']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y',],
            q3: ['Y'],
            q4: ['Y'],
            q5: ['N', 'UK'],
            q6: ['E'],
            q7: ['N'],
            q8: ['E'],
            smelter: ['LISTED']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['Y'],
            q4: ['Y'],
            q5: ['E'],
            q6: ['Y', 'NA'],
            q7: ['Y'],
            q8: ['E'],
            smelter: ['UNLISTED']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['Y'],
            q4: ['Y'],
            q5: ['N', 'UK'],
            q6: ['N', 'PA'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['E']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['Y'],
            q4: ['Y'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['LISTED-FROM-DRC']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['Y'],
            q4: ['Y'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['UNLISTED']
        },
        {
            q1: ['Y', 'NA'],
            q2: ['Y'],
            q3: ['E'],
            q4: ['E'],
            q5: ['E'],
            q6: ['E'],
            q7: ['E'],
            q8: ['E'],
            smelter: ['UNLISTED']
        },
    ],
}

module.exports = matrix;