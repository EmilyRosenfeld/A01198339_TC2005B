using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonButtons : MonoBehaviour
{
    Color originalColor;
    AudioSource audioSource;

    void Start ()
    {
        audioSource = GetComponent<AudioSource>();
        originalColor = GetComponent<Image>().color;
    }

    public void HighLight()
    {
        StartCoroutine(ChangeColor());
    }

    IEnumerator ChangeColor()
    {
        PlayAudio();
        GetComponent<Image>().color = new Color (0,0,0,0.5f);
        yield return new WaitForSeconds (0.5f);
        GetComponent<Image>().color = originalColor;

    }

    public void PlayAudio(){
        Debug.Log("Button plaing: " + gameObject.name);
        audioSource.Play();
    }

}
