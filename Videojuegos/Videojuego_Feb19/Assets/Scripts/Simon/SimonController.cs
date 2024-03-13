
// Script to generate the sequence of buttons to show
// Emily Rosenfeld, a01198339
// 6 March 2024

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class SimonController : MonoBehaviour
{
    [SerializeField] List<int> sequence; //Para que unity lo pueda ver (SerializeField)
    [SerializeField] GameObject[] buttons; 
    [SerializeField] TMP_Text scoreText;

    bool playerTurn = false;
    int index;
    int level = 0;
    int highScore = 0;


    void Start()
    {
       highScore = PlayerPrefs.GetInt("highScore", 0);
        NewGame();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

  void NewGame()
    {
        sequence = new List<int>();
        index = 0; 
        AddNumber();
    }

    void AddNumber()
    {
        playerTurn = false;
        index = 0;
        int num = Random.Range(0, buttons.Length);
        sequence.Add(num);
        StartCoroutine(ShowSequence());
    }

    IEnumerator ShowSequence()
        {
            yield return new WaitForSeconds(1);
            for (int i=0; i<sequence.Count; i++){
                int num = sequence[i];
                // Call a method on the Button script
                buttons[num].GetComponent<SimonButtons>().HighLight();
                yield return new WaitForSeconds(1);
            }
            playerTurn = true;
        }
    public void ButtonSelect(int buttonID)
    {
        if (playerTurn ){   
            // Debug.Log("Pressed: "+ buttonID);
            if (sequence[index] == buttonID) {
                //continue the sequence
                index ++;
                //check if we completed the sequence
                if (index == sequence.Count){
                    level++;
                    scoreText.text = "Score: " + level.ToString();
                    index = 0;
                    AddNumber();
                }
            }
            else {
                //game over
                PlayerPrefs.SetInt("score", level);
                if (level > highScore){
                    PlayerPrefs.SetInt("highScore", level);
                }
                Debug.Log("GAME OVER");
                UnityEngine.SceneManagement.SceneManager.LoadScene("SimonResults");
            }
         }
    }
}
