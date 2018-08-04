export default function formatter(data) {
    let term = data.term;
    let begin_date = data.start_date.replace("-", "").replace("-", "");
    let end_date = data.end_date.replace("-", "").replace("-", "");
    return {
        'q': term,
        'begin_date': begin_date,
        'end_date': end_date
    }
}

