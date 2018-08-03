export default function formatter(data) {
    let term = data.term;
    let begin_date = data.start_date.replace("-", "").replace("-", "");
    let end_date = data.end_date.replace("-", "").replace("-", "");

    return {
        'api-key': "0b596582167a4169b630702325a5fa89",
        'q': term,
        'begin_date': begin_date,
        'end_date': end_date
    }
}