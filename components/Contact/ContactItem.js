import styles from "./Contact.module.scss";

function ContactItem({ active, name, inputType, rows, onChange, value }) {
  return (
    <div className={`${styles.input__field} ${!active ? "" : styles.active}`}>
      <label className={styles.label}>{name}</label>
      <br />
      {inputType === "input" ? (
        <input
          type='text'
          className={styles.input}
          name={name}
          onChange={onChange}
          value={value}
        />
      ) : (
        <textarea
          type='text'
          rows={rows}
          className={`${styles.input} ${styles.textarea}`}
          name={name}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
}

export default ContactItem;
