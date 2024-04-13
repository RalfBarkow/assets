import Dictionary from './dictionary.js'; // Import the Dictionary class

describe('Dictionary', () => {
  let dict;

  beforeEach(() => {
    dict = new Dictionary();
  });

  it('should associate a key with a value', () => {
    dict.associate('key1', 'value1');
    expect(dict.getValue('key1')).toBe('value1');
  });

  it('should retrieve undefined for non-existent key', () => {
    expect(dict.getValue('nonExistentKey')).toBeUndefined();
  });

  it('should check if a key exists', () => {
    dict.associate('key2', 'value2');
    expect(dict.containsKey('key2')).toBe(true);
    expect(dict.containsKey('nonExistentKey')).toBe(false);
  });

  it('should remove an association by key', () => {
    dict.associate('key3', 'value3');
    dict.remove('key3');
    expect(dict.getValue('key3')).toBeUndefined();
  });

  it('should retrieve all keys', () => {
    dict.associate('key4', 'value4');
    dict.associate('key5', 'value5');
    expect(dict.keys()).toEqual(['key4', 'key5']);
  });

  it('should retrieve all values', () => {
    dict.associate('key6', 'value6');
    dict.associate('key7', 'value7');
    expect(dict.values()).toEqual(['value6', 'value7']);
  });

  it('should retrieve all associations', () => {
    dict.associate('key8', 'value8');
    dict.associate('key9', 'value9');
    expect(dict.associations()).toEqual([['key8', 'value8'], ['key9', 'value9']]);
  });
});
