
// Script to generate the sequence of buttons to show
// Emily Rosenfeld, a01198339
// 6 March 2024


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimonController : MonoBehaviour
{
    [SerializeField] List<int> sequence; //Para que unity lo pueda ver (SerializeField)
    [SerializeField] GameObject[] buttons; 
    void Start()
    {
        sequence = new List<int>();
        StartCoroutine(AddNumber());
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    IEnumerator AddNumber()
    {
        for (int i=0; i<10; i++) {
            int num = Random.Range(0, buttons.Length);
            // Call a method on the Button script
            buttons[num]. GetComponent<SimonButtons>().HighLight();
            sequence.Add(num);
            yield return new WaitForSeconds(1);
        }
        
    }

}
